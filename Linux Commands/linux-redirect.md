
# Redirect output to file
ls -l > file1

#Standard output is 1 and error is 2

ls -l 1 > file1 

#Output both error and output to file

ls -l > file.txt > 2>&1

# > will overwrite and >> will append

#Avoid overwrite of file
    noclobber 
    set -o option for shell

#Named Pipe
    mkfifo nameofpipe

#General Pipe
    ls -a | grep "name"

#last text 
    last text on terminal
    !$

#Tee
    Diaplays and redirects the content as well
    ls -l | tee myfile
