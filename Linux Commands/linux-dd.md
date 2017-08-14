#check disk info
    fdisk -l

#output first 512 bytes using dd

    dd if=/dev/sda of=test  count=1 bs=512

    dd of=/dev/sda if=/dev/zero  count=1 bs=512
    


