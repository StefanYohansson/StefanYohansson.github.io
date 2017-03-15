---
layout: post
title: Google Drive for backup small databases
introduction: Use only on really small databases.
comments: true
---

# This tutorial is for unix distros, but you can adapt to your needs.

Well, I need to backup a small client database and needed to do it fast and easy. So I think on the first thing that help me when I think on backup or send a file: Google Drive. Why not?

Client OS is Debian 8.3 (jessie) and I have installed [gdrive project](https://github.com/prasmussen/gdrive) to manage upload. All you need to do is download a binary and install on your machine.

## Configuring gdrive

After install/copy binary, only thing left to do is run `gdrive about` and follow program instruction to generate token.

## Create target folder

Now, we need to create a folder to upload our files to google drive, do it using `gdrive` by command:
`gdrive mkdir <folder>` this way you will receive an output like this `Directory 0BwFhcg1_acLiemZENlQ5Z2Vpd2c created`. Save that hash and go on.

## [pg_dump command](http://stackoverflow.com/questions/2893954/how-to-pass-in-password-to-pg-dump)

I suppose that you know how to export a dump from your database and pg_dump is how I export from postgres. So let's talk about it. For avoid pg_dump to ask password every time you'll need to create a `.pgpass` file on home folder of the user that will execute your command, if you'll put it in a cronjob, you can export a environment variable and export using `--dbname` option.

using .pgpass:
create `.pgpass` file, write `localhost:5432:mydbname:postgres:mypass` and `chmod 600 .pgpass`
then
`pg_dump > last_backup.sql`

using environment variable:
`export MYDB=postgresql://username:password@127.0.0.1:5432/mydatabase`
then
`pg_dump --dbname=$MYDB > last_backup.sql`

## concat all the things

`pg_dump --dbname=$MYDB > /root/last_backup.sql && ts=$(eval date +"%x_%T"); gdrive upload -p 0BwFhcg1_acLiemZENlQ5Z2Vpd2c --name "last_backup_${ts}" /root/last_backup.sql`

### let's explain the command:

pg_dump for export database to file `/root/last_backup.sql`;

ts variable with current date assigned;

now on gdrive upload you'll use that hash copied from gdrive mkdir command, --name argument is for name on google drive after upload, here we use `ts` variable to diff backup names, otherwise we'll see only a lot of `last_backup` files. You can create a script put this code and check integrity comparing previous dump size or something fancy.

That's all folks.
