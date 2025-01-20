import React from 'react';

const Pagos= () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>REGISTROS DE PAGOS</h1>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}>
        {/* Pagos */}
        <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
            Pagos <span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>▲</span>
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[...Array(4)].map((_, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                <span>Mantenimiento</span>
                <div>
                  <span style={{ fontWeight: 'bold' }}>$500.00</span>
                  <br />
                  <span style={{ color: '#ff6a00', fontSize: '12px' }}>15/01/25</span>
                </div>
              </li>
            ))}
          </ul>
          <button style={{ marginTop: '20px', backgroundColor: '#ff6a00', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 15px', cursor: 'pointer', width: '100%' }}>
            Imprimir próximos pagos
          </button>
        </div>

        {/* Pagos Pendientes */}
        <div style={{ flex: 1, backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', padding: '20px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px', display: 'flex', justifyContent: 'space-between' }}>
            Pagos Pendientes <span style={{ transform: 'rotate(180deg)', display: 'inline-block' }}>▲</span>
          </h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[...Array(4)].map((_, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                <span>Mantenimiento</span>
                <div>
                  <span style={{ fontWeight: 'bold' }}>$500.00</span>
                  <br />
                  <span style={{ color: '#ff6a00', fontSize: '12px' }}>15/01/25</span>
                </div>
              </li>
            ))}
          </ul>
          <button style={{ marginTop: '20px', backgroundColor: '#ff6a00', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 15px', cursor: 'pointer', width: '100%' }}>
            Imprimir pagos pendientes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagos;