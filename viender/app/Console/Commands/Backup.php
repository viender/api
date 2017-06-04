<?php

namespace App\Console\Commands;

use App\User;
use Carbon\Carbon;
use App\DripEmailer;
use Illuminate\Http\File;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Storage;

class Backup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:backup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Backup database to cloud storage';

    /**
     * MYSQLDump
     * @var MYSQLDump
     */
    protected $dump;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
        $this->dump = new \MySQLDump(new \mysqli(
            config('database.connections.mysql.host'),
            config('database.connections.mysql.username'),
            config('database.connections.mysql.password'),
            config('database.connections.mysql.database')));
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $tempFileName = 'viender-backup.sql.gz';
        $fileName = tempnam(sys_get_temp_dir(), $tempFileName);
        $this->dump->save($fileName);

        $remoteFileName = Carbon::now()->toAtomString() . '.sql.gz';

        Storage::putFileAs('backups', new File($fileName), $remoteFileName);
        echo 'Done' . PHP_EOL;
    }
}
