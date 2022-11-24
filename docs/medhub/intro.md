# This is the official Documentation page for Med Hub Project

## Sitemap
```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#21af90'}}}%%
erDiagram
    HomePage {
        t asd
    }
    COMMUNICATION{
        type Chat
        type Video
    }
    HomePage }|--|{ CLINIC : ""
    HomePage ||--|| DASHBOARD : LogIn
    DASHBOARD ||--|{ MEDIC : ""
    DASHBOARD ||--|{ PATIENT : ""
    CLINIC ||--|| MEDIC_LIST : ""
    MEDIC_LIST ||--|| MEDIC_PROFILE : ""
    MEDIC_PROFILE ||--|{ PAYMENT : "TO PAYMENT MODEL"
    PAYMENT ||--|| COMMUNICATION : "TO REGISTERED VIDEO CONVERSATIONS"
    
    MEDIC_PROFILE }|--|| MEDIC_ACCOUNT : "Display Medic Account information "
    MEDIC ||--|| MEDIC_ACCOUNT: ""
    PATIENT ||--|| PATIENT_ACCOUNT: ""
    PATIENT_ACCOUNT ||--||COMMUNICATION: ""
    COMMUNICATION ||--|{ CHAT : ""
    COMMUNICATION ||--|{ VIDEO:""
```