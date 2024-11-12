# Tugas 8 Pertemuan 9 Praktikum Pemrograman Mobile C

Nama    : Sufyan Abdur Rofiq

NIM    : H1D022004

Shift Lama  : B

Shift Baru  : C

# A. ScreenShoot Tampilan Proses CRUD :

1. Tampilan Data Mahasiswa :

![image](https://github.com/user-attachments/assets/d424ebc4-5dea-420c-9a33-f736a1f1eb9c)

2. Tampilan Tambah Mahasiswa :

![image](https://github.com/user-attachments/assets/82e30a84-248e-4935-9dc7-ca896c32e5f1)

![image](https://github.com/user-attachments/assets/f7e92f76-5e15-4828-a772-8778fe291f44)

Data mahasiswa Prasetyo Angga berhasil ditambahkan :

![image](https://github.com/user-attachments/assets/ed1a3fe4-0ab8-4081-a975-552214ff1401)

3. Tampilan Edit Mahasiswa :

Data mahasiswa yang belum diedit :

![image](https://github.com/user-attachments/assets/2ea816f2-4fa8-44cb-ac49-468b9c5d8caa)

Data mahasiswa yang sudah diedit :

![image](https://github.com/user-attachments/assets/ebeaba82-cd8b-4d39-8d87-8753d6c6691d)

Tampilan Data Mahasiswa setelah data mahasiswa Prasetyo Angga berhasil diedit :

![image](https://github.com/user-attachments/assets/82169c70-8598-4c97-99d8-01d91f2ed5b4)

4. Tampilan Hapus Mahasiswa :

Saya akan menghapus data mahasiswa Sufyan Abdur Rofiq :

![image](https://github.com/user-attachments/assets/3f5d3761-adb7-4078-b3af-5f63c95e4ed8)

Maka akan muncul Alert Konfirmasi Hapus (YA / TIDAK) :

![image](https://github.com/user-attachments/assets/59a79b14-34bb-40bb-a776-604aa3fedbcf)

Tampilan Data Mahasiswa setelah data mahasiswa Sufyan Abdur Rofiq dihapus :

![image](https://github.com/user-attachments/assets/fabb65bb-2522-4b72-a528-647317ec4194)

# B. Penjelasan Proses CRUD :

1. Langkah pertama adalah membuat Database API. Di sini, saya membuat sebuah database dengan nama db_mhs. Di dalam database tersebut, terdapat sebuah tabel mahasiswa yang akan digunakan untuk menjalankan proses CRUD :

![image](https://github.com/user-attachments/assets/46dc90b3-5ca9-42e4-95a5-f18c6e31a92f)

2. Setelah membuat database, langkah berikutnya adalah membuat folder untuk backend agar kode-kode dapat terhubung dengan Database API. Folder ini dibuat di dalam direktori htdocs karena saya menggunakan tools XAMPP.

3. Di dalam folder tersebut, kita membuat beberapa file .php, di antaranya koneksi.php, tampil.php, tambah.php, lihat.php, hapus.php, dan edit.php :

a). koneksi.php :

![image](https://github.com/user-attachments/assets/09357f9f-7e34-463c-aa3e-62b4f4017d5d)

File koneksi.php digunakan untuk menghubungkan dengan database API.

b). tampil.php :

![image](https://github.com/user-attachments/assets/7b9a93c4-1067-49fb-844e-72ada1ceb2bb)

File tampil.php berfungsi untuk menampilkan seluruh data mahasiswa.

c). tambah.php :

![image](https://github.com/user-attachments/assets/0f2164c2-b867-48c8-85f1-66102b887096)

File tambah.php digunakan untuk menambahkan data mahasiswa dengan memasukkan nama dan jurusan.

d). lihat.php :

![image](https://github.com/user-attachments/assets/bdaa2dcc-34fc-438e-940d-393bd9812d72)

File lihat.php berfungsi untuk mengambil satu data mahasiswa berdasarkan ID.

e). hapus.php :

![image](https://github.com/user-attachments/assets/1073b9cb-3967-4c20-97a1-8d39e8ae7a51)

File hapus.php berfungsi untuk menghapus data mahasiswa berdasarkan ID mahasiswa tersebut.

f). edit.php :

![image](https://github.com/user-attachments/assets/7f3f75b1-b91c-4929-8298-6869d61d13c0)

File edit.php digunakan untuk mengubah data mahasiswa yang sebelumnya sudah ditambahkan.

4. Setelah membuat file-file .php, langkah selanjutnya adalah membuat proyek Ionic dengan memasukkan perintah ionic start 'CRUD_MHS', kemudian pilih framework Angular dan template blank.

5. Selanjutnya, setelah proyek Ionic berhasil dibuat, kita membuat halaman mahasiswa dengan menjalankan perintah "ionic g pg mahasiswa", dan membuat service API dengan perintah "ionic g s service/api".

6. Kemudian, deklarasikan provideHttpClient pada file app/app.module.ts agar aplikasi dapat berkomunikasi dengan API.

![image](https://github.com/user-attachments/assets/dd5ee95b-2523-481a-adae-beaad283aa41)

7. Selanjutnya, kita mengedit file api.service.ts pada folder service/api yang telah dibuat sebelumnya. Di sini, kita mengubah apiURL menjadi 'http://localhost/mahasiswa'.

![image](https://github.com/user-attachments/assets/6ca1764f-6bdc-4477-902d-32f70f7498b6)

8. Selanjutnya, kita melakukan pengeditan pada halaman mahasiswa, yaitu di file mahasiswa.page.html dan mahasiswa.page.ts.

a). File mahasiswa.page.html :

Kode di bawah ini menampilkan header dengan tulisan "Data Mahasiswa" yang memiliki efek transparan, serta tombol "Tambah Mahasiswa" yang akan memanggil fungsi openModalTambah() ketika diklik untuk menambahkan data mahasiswa.

![image](https://github.com/user-attachments/assets/7152234c-ce44-41ed-a92d-e2667ebacc3b)

Kode di bawah ini mendefinisikan modal "Tambah Mahasiswa" yang muncul ketika modalTambah diaktifkan. Modal ini memiliki tombol "Batal" untuk menutup modal dan form input untuk mengisi nama serta jurusan mahasiswa, yang terhubung dengan variabel nama dan jurusan. Setelah data diisi, tombol "Tambah Mahasiswa" akan memanggil fungsi tambahMahasiswa() untuk menambahkan data mahasiswa.

![image](https://github.com/user-attachments/assets/09c72dd3-aaef-4b76-8dd1-ef1fcb805fe1)

Kode di bawah ini membuat modal "Edit Mahasiswa" yang muncul ketika modalEdit diaktifkan. Modal ini memiliki tombol "Batal" untuk menutup modal dan dua input untuk mengubah nama serta jurusan mahasiswa, yang terhubung dengan variabel nama dan jurusan. Tombol "Simpan Perubahan" akan memanggil fungsi editMahasiswa() untuk menyimpan perubahan data mahasiswa.

![image](https://github.com/user-attachments/assets/67a65f78-1eb4-426d-9f4e-d868b203d5f1)

Kode di bawah ini menampilkan daftar mahasiswa menggunakan <ion-card> yang diulang untuk setiap item dalam dataMahasiswa. Setiap kartu menampilkan nama dan jurusan mahasiswa, serta dua tombol: "Edit" untuk membuka modal edit dengan openModalEdit() dan "Hapus" untuk menghapus data mahasiswa melalui fungsi hapusMahasiswa().

![image](https://github.com/user-attachments/assets/0f48c232-9158-4a74-a203-cf0ccb54ac54)

b). File mahasiswa.page.ts :

![image](https://github.com/user-attachments/assets/9214e1d7-fe3f-48a4-a552-0e577aaba4a4)

![image](https://github.com/user-attachments/assets/dd8081d3-1a18-46a7-b820-f6adb6443ccb)

![image](https://github.com/user-attachments/assets/7c67f594-6ce4-40d8-bc64-b028a4d4880e)

![image](https://github.com/user-attachments/assets/843fb33d-989c-4011-9345-003c707805b5)

Kode di atas adalah komponen Angular untuk halaman "Mahasiswa" dalam aplikasi Ionic yang digunakan untuk mengelola data mahasiswa melalui berbagai interaksi. Komponen ini memanfaatkan ModalController dan AlertController dari Ionic untuk menampilkan modal (popup) dan konfirmasi alert. Data mahasiswa disimpan dalam array dataMahasiswa, dan komponen ini menyediakan fitur untuk menambah, mengedit, dan menghapus data mahasiswa dengan berinteraksi dengan API melalui ApiService. Variabel seperti id, nama, dan jurusan digunakan untuk menyimpan data mahasiswa yang sedang dipilih atau diedit.

Saat halaman dimuat, fungsi ngOnInit() akan memanggil metode getMahasiswa() untuk mengambil data mahasiswa dari server dan menampilkannya di halaman. Fungsi tambahMahasiswa() digunakan untuk menambahkan mahasiswa baru ke daftar jika input nama dan jurusan sudah diisi, sedangkan editMahasiswa() digunakan untuk mengubah data mahasiswa yang sudah ada. Kedua proses ini berkomunikasi dengan API untuk menyimpan perubahan, dan halaman akan diperbarui secara otomatis setelah berhasil.

Fungsi lainnya, seperti hapusMahasiswa(), akan menampilkan konfirmasi melalui alert sebelum menghapus data mahasiswa dari server. Modal untuk menambah atau mengedit data mahasiswa dibuka dengan memanggil fungsi openModalTambah() atau openModalEdit(), yang memungkinkan pengguna untuk melakukan perubahan. Setelah modal ditutup, input form akan direset menggunakan fungsi resetModal(), memastikan tidak ada data lama yang tertinggal di form.














































