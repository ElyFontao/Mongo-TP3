import mongoose from 'mongoose';

async function testConnection() {
  try {
    // Conectar a la base de datos
    await mongoose.connect('mongodb+srv://grupo-01:grupo01@cursadanodejs.ls9ii.mongodb.net/Node-js');
    console.log('✅ Conexión exitosa a MongoDB');
    
    // Obtener el objeto de conexión a la base de datos
    const db = mongoose.connection;

    // Listar las colecciones existentes en la base de datos
    const collections = await db.db.listCollections().toArray();
    console.log('📂 Colecciones disponibles:', collections.map((c) => c.name));
  } catch (error) {
    console.error('❌ Error al conectar a MongoDB:', error.message);
  } finally {
    // Cerrar la conexión
    mongoose.connection.close();
  }
}

// Ejecutar la prueba de conexión
testConnection();
