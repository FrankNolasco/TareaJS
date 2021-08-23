from flask import Flask, render_template

app = Flask(__name__)


@app.route("/", methods=["GET"])
def init():
    return render_template("home.html", login=False)

@app.route("/home", methods=["GET"])
def home():
    return render_template("home.html", login=True)

@app.route("/products", methods=["GET"])
def products():
    return render_template("productos.html", login=True)

@app.route("/clients", methods=["GET"])
def clients():
    return render_template("clientes.html", login=True)

@app.route("/report-shop", methods=["GET"])
def reportShop():
    return render_template("reporte_compras.html", login=True)

@app.route("/report-sale", methods=["GET"])
def reportSale():
    return render_template("reporte_ventas.html", login=True)


@app.route("/login", methods=["GET"])
def login():
    return render_template("login.html", login=False)


@app.route("/register", methods=["GET"])
def register():
    return render_template("register.html", login=False)

if __name__ == '__main__':
    app.run()
