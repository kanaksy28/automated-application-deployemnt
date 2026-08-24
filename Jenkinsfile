pipeline {
    agent any

    stages {

        stage('Check Tools') {
            steps {
                bat 'git --version'
                bat 'docker --version'
            }
        }
        
        stage('Check Ansible') {
            steps {
                bat 'wsl.exe -d Ubuntu -- ansible --version'
            }
        }

        stage('Checkout Source Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/kanaksy28/automated-application-deployemnt.git'
            }
        }

        stage('Check Application Files') {
            steps {
                bat 'dir'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t automated-app:1.0 .'
            }
        }

        stage('Deploy Using Ansible') {
            steps {
            bat '''
                wsl.exe -d Ubuntu -- bash -lc "cd /mnt/c/ProgramData/Jenkins/.jenkins/workspace/Automated-Application-Deployment && ansible-playbook -i ansible/inventory.ini ansible/deploy.yml"
            '''
            }
        }
        
        stage('Check Container Status') {
            steps {
                bat 'docker ps -a'
                bat 'docker logs automated-app'
            }
        }

        stage('Verify Deployment') {
            steps {
                powershell '''
                    Start-Sleep -Seconds 5
                    Invoke-WebRequest -Uri "http://localhost:3000" -UseBasicParsing
                '''
            }
        }
    }
}