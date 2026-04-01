# ORA Grant Request Automator

A Google Apps Script automation system built to simulate a university 
research office intake workflow.

## Features
- Auto-logs form submissions to Google Sheets in real-time
- Sends templated confirmation emails to requesters
- Tracks status across 3 stages: Pending, In Review, Approved
- Color-codes rows by status (yellow, blue, green)

## Tech Stack
Google Apps Script, Google Forms, Google Sheets, Gmail API

## How it works
1. Requester fills out the Research Grant Request Form
2. On submit, the Apps Script trigger fires automatically
3. Data is logged, status set to Pending, row highlighted yellow
4. Confirmation email sent instantly to the requester
