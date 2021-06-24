import sqlite3

db = sqlite3.connect("usuarios.db")

cursor = db.cursor()

correo = "pepe@gmail.com"
contra = 'pepe21'

cursor.execute(f"SELECT correo, contrasena FROM usuario WHERE correo = '{correo}' AND contrasena = '{contra}'")
if cursor.fetchone() == None:
    print("No registrado")
else:
    print("Encontrado")

    


