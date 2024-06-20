# Menambah Swapfile untuk membuat virtual memory dan memperingan beban RAM

- Menambahkan swap space pada laptop dengan RAM kecil dapat memberikan beberapa manfaat, meskipun tidak ideal jika laptop memiliki RAM yang terbatas. Berikut adalah beberapa manfaat dari menambahkan swap space pada laptop dengan RAM kecil:

- Memungkinkan untuk menjalankan aplikasi tambahan: Dengan adanya swap space, laptop dapat menjalankan lebih banyak aplikasi atau aplikasi yang memerlukan lebih banyak RAM daripada yang tersedia. Swap space memberikan tempat tambahan untuk menyimpan data yang tidak aktif sementara di luar RAM.

- Mencegah terjadinya "Out of Memory": Swap space dapat membantu mencegah laptop dari mengalami "Out of Memory" yang menyebabkan aplikasi crash atau sistem operasi menjadi tidak responsif. Ketika RAM hampir penuh, sistem akan memindahkan data yang tidak aktif ke swap space untuk memberikan ruang bagi aplikasi yang aktif.

 - Meningkatkan stabilitas sistem: Dengan adanya swap space, sistem akan lebih stabil karena lebih mampu mengelola penggunaan memori yang dinamis. Ini dapat membantu mencegah crash atau hang pada laptop dengan RAM yang terbatas.

Meskipun ada manfaat dari menambahkan swap space, penting untuk diingat bahwa swap space berada di disk keras yang biasanya jauh lebih lambat daripada RAM. Sehingga, penggunaan swap space secara berlebihan dapat mengurangi kinerja keseluruhan sistem, terutama jika laptop sering mengakses swap space untuk operasi rutin.

Secara umum, swap space adalah solusi sementara untuk memperluas kapasitas memori pada sistem dengan RAM yang terbatas. Namun, untuk kinerja yang optimal, disarankan untuk memiliki cukup RAM untuk kebutuhan aplikasi yang digunakan, karena RAM tetap menjadi komponen kunci dalam menjamin responsifitas dan kinerja sistem secara keseluruhan.

## Tutor

## Tutor

Refensi Web: https://techarea.co.id/cara-menambahkan-ruang-swap-pada-ubuntu-20-04/

    sudo swapon --show
#
    df -h
#
    OutputFilesystem      Size  Used Avail Use% Mounted on
    udev            474M     0  474M   0% /dev
    tmpfs            99M  932K   98M   1% /run
    /dev/vda1        25G  1.4G   23G   7% /
    tmpfs           491M     0  491M   0% /dev/shm
    tmpfs           5.0M     0  5.0M   0% /run/lock
    tmpfs           491M     0  491M   0% /sys/fs/cgroup
    /dev/vda15      105M  3.9M  101M   4% /boot/efi
    /dev/loop0       55M   55M     0 100% /snap/core18/1705
    /dev/loop1       69M   69M     0 100% /snap/lxd/14804
    /dev/loop2       28M   28M     0 100% /snap/snapd/7264
    tmpfs            99M     0   99M   0% /run/user/1000

Perangkat dengan / di dalam kolom Mounted on adalah diska kita dalam kasus ini. Kita memiliki banyak ruang yang tersedia dalam contoh ini (hanya digunakan 1,4 G). Penggunaan Anda mungkin akan berbeda.
