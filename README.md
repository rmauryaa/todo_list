# Task Management System

## Overview

This project is a simple task management system that allows you to archive tasks and perform actions such as restoring or deleting archived tasks. The user interface provides functionalities for filtering tasks based on priority and status.

## Features

1. **Archive Tasks**: Tasks can be archived and are displayed in a table format.
2. **Restore Tasks**: Archived tasks can be restored to the main tasks list.
3. **Delete Tasks**: Archived tasks can be permanently deleted.
4. **Filter Tasks**: Archive tasks can be filtered based on priority and status.

## Files

- `index.html`: The main HTML file.
- `style.css`: The CSS file for styling the application.
- `script.js`: The JavaScript file containing the logic for managing tasks.

## Code Explanation

### `script.js`

1. **Selecting Elements**
   ```javascript
   const tbody = document.querySelector('tbody');
   ```
   This line selects the `<tbody>` element where tasks will be displayed.

2. **Loading Archived Tasks**
   ```javascript
   let archiveTasks = JSON.parse(localStorage.getItem('archiveTasks'));
   if (archiveTasks.length > 0) display1(archiveTasks);
   ```
   This loads archived tasks from `localStorage` and displays them if any exist.

3. **Creating Archive Rows**
   ```javascript
   function archiveRows(obj) {
     // Code to create a table row for each archived task
   }
   ```
   This function creates a table row with task details and buttons for restoring or deleting tasks.

4. **Displaying Tasks**
   ```javascript
   function display1(arr) {
     tbody.innerHTML = '';
     arr.forEach((element) => {
       tbody.append(archiveRows(element));
     });
   }
.

5. **Filtering Tasks**
   ```javascript
   function priofilter() {
     // Code to filter tasks based on priority
   }

   function statusfilter() {
     // Code to filter tasks based on status
   }
   ```
   These functions filter the archived tasks based on priority or status and update the displayed tasks.

## Usage

1. **Load the Page**: Open `index.html` in a browser to view the application.
2. **Archive Tasks**: Tasks are archived through the application's interface.
3. **Restore or Delete Tasks**: Use the "Restore" or "Delete" buttons in the table to manage tasks.
4. **Filter Tasks**: Use the dropdowns to filter tasks based on priority and status.
