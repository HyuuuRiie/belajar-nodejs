function cetakNama(nama) {
    return `Halo Nama Saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
    nama : 'Yurie',
    umur : 22, 
    cetakMhs(){
        return `Halo nama saya ${this.nama} dan umur saya ${this.umur} tahun.`;
    },
};

class Orang{
    constructor(){
        console.log('Objek dibuat');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang,
// };

module.exports = {cetakNama, PI, mahasiswa, Orang}