```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: prevent the default handling of form's submit

    Note right of browser: event handler create the nex note and add it to the list

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: Created
    deactivate server

    Note right of browser: No redirect and no reload