import flask
from flask import Flask, Response, render_template
from flask.ext.triangle import Triangle
from twilio.rest import TwilioRestClient
import os

app = Flask('SQUAD', static_folder='.', template_folder='.')
# Triangle(app)
 
# Your Account Sid and Auth Token from twilio.com/user/account
account_sid = "AC987e6871219956a52757611138953c8d"
auth_token  = "657d361528befe2ece766c1d95aa3f4a"
client = TwilioRestClient(account_sid, auth_token)

@app.route('/')
def index():
    # return render_template('index.html')
    return app.send_static_file('index.html')

@app.route('/views/<path:path>')
def get_view(path):
    # send_static_file will guess the correct MIME type
    # return render_template('/views/{}'.format(path))
    return app.send_static_file(os.path.join('views', path))

@app.route('/js/<path:path>')
def static_js(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(os.path.join('js', path))

@app.route('/css/<path:path>')
def static_css(path):
    # send_static_file will guess the correct MIME type
    return app.send_static_file(os.path.join('css', path))

@app.route('/message/<content>', methods=['GET'])
def message(content):
    numbers = ['+18326417741', '+17139623380', '+12816608877', '+15125798752']
    for num in numbers:
        message = client.messages.create(
            to=num, 
            from_="+18327302688", 
            body="~~SQUAD~~ New Message from Michael Gyarmathy in GriefShare. Content: " + content + " Send SMS to +18326417741 to reply.",  
        )
    # return 'success'
    # message = client.messages.create(
    #     to='+18326417741', 
    #     from_="+18327302688", 
    #     body="~~SQUAD~~ New Message from Michael Gyarmathy in GriefShare. Content: " + content + " Send SMS to +18326417741 to reply.",  
    # )
    return 'success'

if __name__ == '__main__':
    app.run(debug=True, port=8000)