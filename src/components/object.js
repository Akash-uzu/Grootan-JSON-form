 const object = {
    "formfields": [
      {
        "fieldtype": "label",
        "attributes": {
          "class": "form-label",
          "for": "firstName",
          "labelText": "First Name*"
        }
      },
      {
        "fieldtype": "input",
        "attributes": {
          "type": "text",
          "class": "form-input",
          "id": "firstName",
          "name": "firstName",
          "placeholder": "Enter first name",
          "required":"true",
          "auto_complete":"off",
        }
      },
      {
        "fieldtype": "label",
        "attributes": {
          "class": "form-label",
          "for": "lastName",
          "labelText": "Last Name"
        }
      },
      {
        "fieldtype": "input",
        "attributes": {
          "type": "text",
          "class": "form-input",
          "id": "lastName",
          "name": "lastName",
          "placeholder": "Enter last name",
          "auto_complete":"off",
        }
      },
      {
        "fieldtype": "label",
        "attributes": {
          "class": "form-label",
          "for": "email",
          "labelText": "Email*"
        }
      },
      {
        "fieldtype": "input",
        "attributes": {
          "type": "email",
          "class": "form-input",
          "id": "email",
          "name": "email",
          "placeholder": "Enter E-mail",
          "required":"true",
          "auto_complete":"off",
        }
      },
      {
        "fieldtype": "label",
        "attributes": {
          "class": "form-label",
          "for": "dob",
          "labelText": "Date of Birth"
        }
      },
      {
        "fieldtype": "input",
        "attributes": {
          "type": "date",
          "class": "form-input",
          "id": "date",
          "name": "date",
          "placeholder": "Enter Date of Birth",
          "required":"true",
          "auto_complete":"off",
        }
      },
      
      {
        "fieldtype": "label",
        "attributes": {
          "class": "form-input",
          "for": "password",
          "labelText": "Password*"
        }
      },
      {
        "fieldtype":"input",
        "attributes":{
            "type":"password",
            "class":"form-input",
            "id":"pass-word",
            "name":"password",
            "placeholder":"Enter Password",
            "required" : "true",
            "auto_complete":"off",
        }
      },
      {
        "fieldtype": "button",
        "attributes": {
          "type": "submit",
          "class": "form-button",
          "id": "submit-button",
          "buttonText": "Register"
        }
      }
    ]
  }
  export default object;
  
  
  
  
  