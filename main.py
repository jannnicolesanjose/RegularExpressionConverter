from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/About')
def about():
    return render_template('About.html')

@app.route('/Tutorial')
def tutorial():
    return render_template('Tutorial.html')

@app.route('/Documentation')
def documentation():
    return render_template('Documentation.html')

@app.route('/Options')
def options():
    return render_template('Options.html')

@app.route('/Option1')
def option1():
    return render_template('Option1.html')

@app.route('/Option2')
def option2():
    return render_template('Option2.html')

@app.route('/CFG1')
def cfg1():
    return render_template('CFG1.html')

@app.route('/CFG2')
def cfg2():
    return render_template('CFG2.html')

@app.route('/PDA1')
def pda1():
    return render_template('PDA1.html')

@app.route('/PDA2')
def pda2():
    return render_template('PDA2.html')

if __name__ == '__main__':
    app.run(debug=True)
