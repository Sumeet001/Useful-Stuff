#Upstart jobs
    /etc/init/*
    /etc/init.d/

    rc0.d contains the services which runs in runlevel 0
    rc1.d contains the services which runs in runlevel 1
    rc2.d contains the services which runs in runlevel 2
    rc3.d contains the services which runs in runlevel 3
    rc4.d contains the services which runs in runlevel 4
    rc5.d contains the services which runs in runlevel 5
    rc6.d contains the services which runs in runlevel 6

    initctl list

    /etc/rc.local

    grep -i 'runlevel' /etc/init/* | awk '/start on/ && /2/ {gsub("/"," "); gsub(":", " ");gsub(".conf"," "); print $3  }'


    crontab -e
    //add this line 
    @reboot  /path_to_you_file/your_file
    //this will execute script on every reboot



