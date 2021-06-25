from flask import Flask, render_template, request
import sqlite3
import os

direccion = os.path.dirname(os.path.abspath(__file__ ))

app = Flask(__name__)

@app.route("/")
def main():
    return render_template('index.html')

@app.route('/registro', methods = ['POST'])
def registro():
    try:
        nombre = request.form['nombre']
        correo = request.form['correo']
        contrasena = request.form['contra']
        conexion = sqlite3.connect("usuarios.db")
        cursor = conexion.cursor()
        query1 = "INSERT INTO usuario VALUES(NULL,'{n}', '{cr}', '{pss}')".format(n = nombre, cr = correo, pss = contrasena)
        cursor.execute(query1)
        conexion.commit()
        return "<h1>Usuario registrado</h1> <a href=""/"" class=""regreso"">Regresar</a>"
    except:
        return "<h1>No se pudo completar porque ya existe el correo del usuario</h1> <a href=""/"" class=""regreso"">Regresar</a>"


@app.route('/ingreso')
def ingreso():
    return render_template('hola.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')



@app.route('/inicio-sesion', methods = ['POST'])
def inicioSesion():
    nombre = request.form['nombre']
    contrasena = request.form['contra'] 
    conexion = sqlite3.connect("usuarios.db")
    cursor = conexion.cursor()
    cursor.execute(f"SELECT correo, contrasena FROM usuario WHERE nombre = '{nombre}' AND contrasena = '{contrasena}'")
    if cursor.fetchone() == None:
        print("No registrado")
        return "<h1>Usuario NO ENCONTRADO</h1> <a href=""/"" class=""regreso"">Regresar</a>"
    else:
        print("Encontrado")
        return "<h1>Usuario SI ENCONTRADO</h1> <a href=""/"" class=""regreso"">Regresar</a>"


if __name__ == "__main__":
    app.run()