const tbody = document.querySelector('tbody');
let archiveTasks = JSON.parse(localStorage.getItem('archiveTasks'));

if (archiveTasks.length > 0) display1(archiveTasks);
// console.log(archiveTasks);
function archiveRows(obj) {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  const td5 = document.createElement('td');
  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');

  btn1.innerText = 'Restore';
  btn2.innerText = 'Delete';
  btn2.className = 'btnstyle2';
  td1.innerText = `${obj.work}`;
  td2.innerText = `${obj.level}`;
  td3.innerText = `${obj.status}`;

  btn1.dataset.id = `${obj.id}`;
  btn2.dataset.id = `${obj.id}`;

  btn1.addEventListener('click', (e) => {
    let curid1 = e.target.dataset.id;
    let arr = JSON.parse(localStorage.getItem('tasks'));

    archiveTasks = archiveTasks.filter((item) => {
      if (item.id != curid1) {
        return true;
      } else {
        arr.push(item);
        return false;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(arr));
    localStorage.setItem('archiveTasks', JSON.stringify(archiveTasks));
    display1(archiveTasks);
  });
  btn2.addEventListener('click', (e) => {
    let curid2 = e.target.dataset.id;
    archiveTasks = archiveTasks.filter((item) => {
      if (item.id != curid2) {
        return true;
      } else {
        return false;
      }
    });
    localStorage.setItem('archiveTasks', JSON.stringify(archiveTasks));
    display1(archiveTasks);
  });
  td4.append(btn1);
  td5.append(btn2);
  tr.append(td1, td2, td3, td4, td5);

  return tr;
}

function display1(arr) {
  tbody.innerHTML = '';
  arr.forEach((element) => {
    tbody.append(archiveRows(element));
  });
}

//priority filter
function priofilter() {
  let val1 = document.getElementById('prio').value;

  let ans1 = archiveTasks.filter((ele) => {
    if (ele.level.toLowerCase() === val1.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  });
  console.log(ans1, 'ans1');
  display1(ans1);
}

//status filter
function statusfilter() {
  let val2 = document.getElementById('status').value;
  let ans2 = archiveTasks.filter((ele) => {
    if (ele.status.toLowerCase() === val2.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  });
  display1(ans2);
}