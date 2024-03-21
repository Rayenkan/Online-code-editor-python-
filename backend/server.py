from flask import Flask, request, jsonify
from flask_cors import CORS
import io
import sys

app = Flask(__name__)
CORS(app)

@app.route('/Output', methods=['GET'])
def execute_Code():
    code = request.args.get('data', '')

    output = io.StringIO()
    error_output = io.StringIO()
    original_stdout = sys.stdout
    original_stderr = sys.stderr
    sys.stdout = output
    sys.stderr = error_output

    try:
        exec(code)
    except Exception as e:
        print("Error:", str(e))

    # Restore original stdout and stderr
    sys.stdout = original_stdout
    sys.stderr = original_stderr

    # Get captured output and error
    captured_output = output.getvalue()
    captured_error = error_output.getvalue().strip()

    # Prepare response
    if captured_output:
        res = {"execution": captured_output}
    else:
        res = {"execution": captured_error}

    return jsonify(res)

if __name__ == '__main__':
    app.run(debug=True)
