import admin from "firebase-admin";

const config = {
  type: "service_account",
  project_id: "planner-emocional",
  private_key_id: "4fb094502e5b5eff1e4a302f5fb17f3de6ef012a",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCuUrc3Ofd/dHBt\nAjBOgFGFPIEa0AKpu4XKhzf/DK+wGnzOwmXR7dbcAg/mpbD62qifXxas7/cn9/qF\ndD6Fy9GKWBfeRgAo69f4fiXy6A19oNAuKv52HFDNXHoTr8fOrierNYB9fvQUGGvT\n/IwB+jYvVgZHrWHFLmekho/be3TlfpcyTYN6J4/xzY2yvu4huO7ysCYim7LkMn6E\ncP5UO53soHiJg4s7SqDKkngK6ZL3IwP2yh1lyKQ5H2E5CzkovQ9zBiVXaoUhwSt7\nIORBdom/mLT3OS31D1MS7uudzkomuXkBiYS94IBuoh5wbdG9xMKHMabC/UGsShG9\ndS9PsntjAgMBAAECggEAKxxSqipAPnl92j+J0cgjIPejGA3sMqyo/DqvivhItJ0A\nU6O4yY9vrO4nn4tHduo/fFZoRbF8pppJjtp+IdmTgwqhMHuQS45z1UThPq7Ls09j\nXJ+OWYhMJVVi7V5x4/em4Mz071RHqXaWqBDTUSPfZZp5KB3FSZ3dzM7oYceo054v\nvLybX8K06/Y0D7WzBBv8i5SNzzCU0rYS6tT52ouo9be5X80Z4hWYJcKaAjPkzYij\nXrCUSrqKxPpyflqRX97kMjvWRIPccYInUBDO/KTPoSb2k1V6sgg2IiBxiNv378X5\nHdB2KjUGo9TcnavGmEixbDrG9MyKUxzqf4WjuvIRHQKBgQDf9YikhGab77qaFJS4\nZv+Z6YiJaENWPVIfZ6o6GdCxK23JSpT7resfROH9FosdNWLnqa/BEbZGQwMEIVVi\nAuEpT/CNes48RZMVa92eF07YziGanAgItjOhuY68Q89Zl1w103JUA1USgVmWHCKU\nAKqk2Cp1EtQ7LhkoHY270vdGnQKBgQDHQ0VtDCJZ4lr6KIzOvXbhJ05eDINnTRMg\nkq5aJ82IrbIqcpklQXxQCc3U0v7P9MsdB81ySWWXfKyY+aayePYD5KVEFCTr2C6s\nZPsvJNvk0KpGke/nM7VQ2eZSohW8Ph2N7ROU3AL2L6F/5OZ4xaqVRSJb3ChgNP4U\n/8VIPyQp/wKBgG0lGRGsYOFQBK3Ap/XyZFDbCiqFAIQP4GzjtYcZO6aMVrXJvi+l\nw7d6d3RDP0rd0LS78qZx/lXhpJ+nqxfX9WmPxtj8Z3PiKFtBNUEtdMSeOKxDrHqq\naSFA8Dn6BhxQcqTcxpQBB728Ai/wyD0+0esCWjayFXI99g6h0IgfuVjVAoGAeX2k\nmMYrM451VczffTW7g6/JckJC4/r0TIniUAmwoUL2PDc+9J4mw04W90nmHrjsFjkp\npCLoFCLpwSOF5Y8mwFzp/sYhdMKMQoQXOjlI8QvgpcJY+ShnxnH0ojE8+1cMAfqo\nU7yI+b00xJu1gbFTPku2lTd4TqBAwmDn0hLdY9UCgYEAxtE7A/oikTPgG98znLjt\nrsjLKkR+EF7PvaxY0Djjvcz5/bRx+LQdBRTOoNP1QGkEZf8I0hE0D6Ggg6svpIfe\n8OrnPFprWPpQCPQHQCi1ja8+EvUkWL4Do++jd17F/C4abpl870y0ROneIQFIJf1J\n9fvdbW/Gt+EG73RB7+tPhjw=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-bma71@planner-emocional.iam.gserviceaccount.com",
  client_id: "105286471237991601436",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bma71%40planner-emocional.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
} as admin.ServiceAccount;
admin.initializeApp({
  credential: admin.credential.cert(config),
});

export default admin;
