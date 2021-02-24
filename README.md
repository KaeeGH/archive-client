archive-client-cli
==================

hls archive client

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/archive-client-cli.svg)](https://npmjs.org/package/archive-client-cli)
[![Downloads/week](https://img.shields.io/npm/dw/archive-client-cli.svg)](https://npmjs.org/package/archive-client-cli)
[![License](https://img.shields.io/npm/l/archive-client-cli.svg)](https://github.com/KaeeGH/archive-client-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g archive-client-cli
$ archive-client COMMAND
running command...
$ archive-client (-v|--version|version)
archive-client-cli/0.0.0 linux-x64 node-v15.8.0
$ archive-client --help [COMMAND]
USAGE
  $ archive-client COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`archive-client getframe [FILE]`](#archive-client-getframe-file)
* [`archive-client hello [FILE]`](#archive-client-hello-file)
* [`archive-client help [COMMAND]`](#archive-client-help-command)

## `archive-client getframe [FILE]`

describe the command here

```
USAGE
  $ archive-client getframe [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/getframe.ts](https://github.com/KaeeGH/archive-client-cli/blob/v0.0.0/src/commands/getframe.ts)_

## `archive-client hello [FILE]`

describe the command here

```
USAGE
  $ archive-client hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ archive-client hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/KaeeGH/archive-client-cli/blob/v0.0.0/src/commands/hello.ts)_

## `archive-client help [COMMAND]`

display help for archive-client

```
USAGE
  $ archive-client help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
