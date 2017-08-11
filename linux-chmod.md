#To change permission of file
    chmod u=rwx,g=rx,o=r myfile
    u=user
    g=group
    o=others 

    rwx=111 =7 Octal represntation for permission 
    111- 7- full permission read/write/execute
    100- 4- Read permission
    
    101- 5- Read and execute permission

    100- 4- Read  permission

#Give Full Permission
    chmod 777 filename for all user,group and others

#Give Read Permission
    chmod 400 filename for user no permission for group and others
