#Install packages 

    apt-get install nodejs
    sudo apt-get install package1 package2 package3

#Remove a package
    sudo apt-get remove package_name

#If you would like to download a package, but not install it, you can issue the following command:

    sudo apt-get install -d packagename
    The files will be located in "/var/cache/apt/archives".

#If you would like to suppress output, you can pass the "-qq" flag to the command:

    sudo apt-get remove -qq packagename

#Search for a package

    apt-cache search terms

#View information about a package

    apt-cache show package_name

#Check which repository it belongs to

    apt-cache policy package_name