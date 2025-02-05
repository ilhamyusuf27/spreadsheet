import { formulaContainerStyle } from '../Spreadsheets/styles';

const FormulaGuide = () => {
  return (
    <div style={formulaContainerStyle}>
      <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>
        Formula yang tersedia:
      </p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li>=SUM(A1:A10) - Menjumlahkan range</li>
        <li>=AVERAGE(A1:A10) - Rata-rata range</li>
        <li>=COUNT(A1:A10) - Menghitung jumlah sel yang berisi angka</li>
        <li>=MAX(A1:A10) - Nilai maksimum dalam range</li>
        <li>=MIN(A1:A10) - Nilai minimum dalam range</li>
        <li>=CONCAT(A1:A10) - Menggabungkan teks</li>
        <li>=A1+B1 - Penjumlahan langsung</li>
        <li>=A1-B1 - Pengurangan langsung</li>
        <li>=A1*B1 - Perkalian langsung</li>
        <li>=A1/B1 - Pembagian langsung</li>
      </ul>
    </div>
  );
};

export default FormulaGuide;