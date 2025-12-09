import markdown
from xhtml2pdf import pisa
import os

# Configuration
INPUT_FILE = "oferta_comercial/06_propuesta_formal_final.md"
OUTPUT_FILE = "Propuesta_Comercial_Wonder_Travel.pdf"
LOGO_PATH = os.path.abspath("ORBITAL LAB LOGO.png")

# CSS Styling to match Word Document
CSS = """
/* Page styling removed for compatibility */

body {
    font-family: Helvetica, Arial, sans-serif;
    font-size: 11pt;
    line-height: 1.5;
    color: #333;
}

h1 {
    font-size: 24pt;
    color: #1a1a1a;
    border-bottom: 2px solid #000;
    padding-bottom: 10px;
    margin-top: 0;
    margin-bottom: 20px;
    text-align: center;
}

h2 {
    font-size: 16pt;
    color: #2c3e50;
    margin-top: 25px;
    margin-bottom: 15px;
    border-bottom: 1px solid #eee;
    padding-bottom: 5px;
}

h3 {
    font-size: 13pt;
    color: #34495e;
    margin-top: 20px;
    margin-bottom: 10px;
}

p {
    margin-bottom: 12px;
    text-align: justify;
}

ul, ol {
    margin-bottom: 15px;
    margin-left: 20px;
}

li {
    margin-bottom: 5px;
}

/* Table Styling to Match Word */
table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    border: 1px solid #000; /* Outer border */
}

th, td {
    border: 1px solid #000; /* Inner borders */
    padding: 8px;
    text-align: left;
    vertical-align: middle;
    font-size: 10pt;
}

th {
    background-color: #E6E6E6; /* Light gray header */
    font-weight: bold;
    color: #000;
    text-align: center;
}

td {
    background-color: #fff;
}

/* Center align specific columns if possible, but general left is safer for text */

blockquote {
    background-color: #f8f9fa;
    border-left: 4px solid #2c3e50;
    padding: 10px 15px;
    margin: 20px 0;
    font-style: italic;
    color: #555;
}

.logo-container {
    text-align: center;
    margin-bottom: 30px;
}

.footer {
    font-size: 9pt;
    color: #888;
    text-align: center;
    margin-top: 50px;
    border-top: 1px solid #eee;
    padding-top: 10px;
}
"""

def convert_markdown_to_pdf(input_path, output_path):
    # Read Markdown
    with open(input_path, "r", encoding="utf-8") as f:
        text = f.read()

    # Convert to HTML
    html_content = markdown.markdown(text, extensions=['tables'])

    # Add HTML structure and CSS
    full_html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <style>
            {CSS}
        </style>
    </head>
    <body>
        <div class="logo-container">
            <img src="{LOGO_PATH}" width="150" height="80" alt="Orbital Lab Logo">
        </div>

        <!-- Content -->
        {html_content}
        
        <div class="footer">
            <p>Orbital Lab - Consultoría en Inteligencia Artificial & Arquitectura de Software</p>
            <p>Confidencial - {os.path.basename(output_path)}</p>
        </div>
    </body>
    </html>
    """

    # Generate PDF
    with open(output_path, "wb") as result_file:
        pisa_status = pisa.CreatePDF(
            full_html,
            dest=result_file
        )

    if pisa_status.err:
        print(f"Error generating PDF: {pisa_status.err}")
    else:
        print(f"PDF successfully generated: {output_path}")

if __name__ == "__main__":
    convert_markdown_to_pdf(INPUT_FILE, OUTPUT_FILE)
