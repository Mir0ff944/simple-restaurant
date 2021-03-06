# config valid for current version and patch releases of Capistrano
lock "~> 3.11"

set :application, 'restaurant2.0'
set :repo_url, 'https://github.com/Mir0ff944/simple-restaurant.git'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default deploy_to directory is /var/www/my_app_name
set :deploy_to, "/home/deploy/restaurant"

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml"
append :linked_files, 'config/env.production.yml', 'config/secrets.yml', 'config/master.key'
# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"

# set :linked_dirs, []
set :linked_dirs, %w[tmp/pids tmp/sockets tmp/cache]

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure

# npm and nvmdeploy conifg
set :npm_flags, '--production'


set :nvm_type, :user # or :system, depends on your nvm setup
set :nvm_node, 'v10.13.0'
set :nvm_map_bins, %w{node npm yarn}

# before "deploy:assets:precompile", "deploy:yarn_install"

# namespace :deploy do
#   desc 'Run rake yarn:install'
#   task :yarn_install do
#     on roles(:web) do
#       within release_path do
#         execute("cd #{release_path} && yarn install")
#       end
#     end
#   end
# end
