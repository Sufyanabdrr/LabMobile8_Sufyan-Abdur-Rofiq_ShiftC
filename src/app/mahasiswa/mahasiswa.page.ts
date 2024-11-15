import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-mahasiswa',
  templateUrl: './mahasiswa.page.html',
  styleUrls: ['./mahasiswa.page.scss'],
})
export class MahasiswaPage implements OnInit {
  dataMahasiswa: any = [];
  modalTambah: boolean = false;
  modalEdit: boolean = false;
  id: any;
  nama: string = '';
  jurusan: string = '';

  constructor(
    private api: ApiService,
    private modal: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getMahasiswa();
  }

  getMahasiswa() {
    this.api.tampil('tampil.php').subscribe({
      next: (res: any) => {
        console.log('Data mahasiswa berhasil dimuat', res);
        this.dataMahasiswa = res;
      },
      error: (err: any) => {
        console.error('Gagal memuat data mahasiswa', err);
      },
    });
  }

  resetModal() {
    this.id = null;
    this.nama = '';
    this.jurusan = '';
  }

  openModalTambah(isOpen: boolean) {
    this.modalTambah = isOpen;
    this.resetModal();
  }

  cancel() {
    this.modal.dismiss();
    this.modalTambah = false;
    this.modalEdit = false;
    this.resetModal();
  }

  tambahMahasiswa() {
    if (this.nama && this.jurusan) {
      let data = { nama: this.nama, jurusan: this.jurusan };
      this.api.tambah(data, 'tambah.php').subscribe({
        next: () => {
          this.resetModal();
          console.log('berhasil tambah mahasiswa');
          this.getMahasiswa();
          this.modalTambah = false;
          this.modal.dismiss();
        },
        error: (err: any) => {
          console.error('gagal tambah mahasiswa', err);
        },
      });
    } else {
      console.log('gagal tambah mahasiswa karena masih ada data yg kosong');
    }
  }

  async hapusMahasiswa(id: any) {
    const alert = await this.alertController.create({
      header: 'Konfirmasi Hapus',
      message: 'Apakah Data ingin dihapus?',
      buttons: [
        {
          text: 'Tidak',
          role: 'cancel',
        },
        {
          text: 'Ya',
          handler: () => {
            this.api.hapus(id, 'hapus.php?id=').subscribe({
              next: () => {
                console.log('berhasil hapus data mahasiswa');
                this.getMahasiswa();
              },
              error: (error: any) => {
                console.error('gagal hapus data mahasiswa', error);
              },
            });
          },
        },
      ],
    });

    await alert.present();
  }

  openModalEdit(isOpen: boolean, id: any) {
    this.modalEdit = isOpen;
    this.modalTambah = false;

    this.api.lihat(id, 'lihat.php?id=').subscribe({
      next: (mahasiswa: any) => {
        this.id = mahasiswa.id;
        this.nama = mahasiswa.nama;
        this.jurusan = mahasiswa.jurusan;
      },
      error: (error: any) => {
        console.error('gagal ambil data mahasiswa', error);
      },
    });
  }

  editMahasiswa() {
    if (this.id && this.nama && this.jurusan) {
      let data = { id: this.id, nama: this.nama, jurusan: this.jurusan };
      this.api.edit(data, 'edit.php').subscribe({
        next: () => {
          console.log('berhasil edit data mahasiswa');
          this.resetModal();
          this.getMahasiswa();
          this.modalEdit = false;
          this.modal.dismiss();
        },
        error: (err: any) => {
          console.error('gagal edit data mahasiswa', err);
        },
      });
    } else {
      console.log('Form tidak lengkap untuk mengedit');
    }
  }
}