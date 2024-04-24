const tbody = document.querySelector('tbody');

let arr = JSON.parse(localStorage.getItem('tasks')) || [];

if (arr.length > 0) display(arr);

function rowMaker(obj) {
  const tr = document.createElement('tr');
  const td1 = document.createElement('td');
  const td2 = document.createElement('td');
  const td3 = document.createElement('td');
  const td4 = document.createElement('td');
  const btn1 = document.createElement('button');
  const btn2 = document.createElement('button');

  td1.innerText = `${obj.work}`;
  td2.innerText = `${obj.level}`;

  btn1.innerText = 'Pending 🔃';
  btn1.className = 'btn1';
  td3.append(btn1);
  btn2.innerText = 'Archive';
  btn2.className = 'btn2';
  btn2.setAttribute('data-id', `${obj.id}`);

  //button 1
  let toggle = true;
  btn1.addEventListener('click', (e) => {
    let data = e.target.dataset.id;
    toggle = !toggle;
    if (toggle) {
      btn1.innerText = 'Pending 🔃';
    } else {
      btn1.innerText = 'Completed ✅';
    }
    arr.forEach((item) => {
      if (item.status === 'Pending') {
        item.status = 'Completed';
      } else {
        item.status = 'Pending';
      }
    });

    localStorage.setItem('tasks', JSON.stringify(arr));

  });

  //button 2

  
  btn2.addEventListener('click', (e) => {
    let arr2 = JSON.parse(localStorage.getItem('archiveTasks')) || [];
    let curId = e.target.dataset.id;
    arr = arr.filter((item) => {
      console.log(item, curId);
      if (item.id != curId) {
        return true;
      } else {
        arr2.push(item);
        return false;
      }
    });

    localStorage.setItem('tasks', JSON.stringify(arr));
    localStorage.setItem('archiveTasks', JSON.stringify(arr2));
    display(arr);
  });

  td4.append(btn2);
  tr.append(td1, td2, td3, td4);

  //td colors
  if (td2.textContent === 'High') {
    td2.classList.add('high');
  }
  if (td2.textContent === 'Medium') {
    td2.classList.add('medium');
  }
  //color section done

  return tr;
}


const add = document.getElementById('addto');
add.addEventListener('click', (e) => {
  e.preventDefault();
  let work1 = document.getElementById('work');
  let level1 = document.getElementById('level');

  let obj = {
    id: new Date().getTime(),
    work: work1.value,
    level: level1.value,
    status: 'Pending',
  };
  arr.push(obj);
  localStorage.setItem('tasks', JSON.stringify(arr));

  display(arr);
});

function display(arr) {
  tbody.innerHTML = '';
  arr.forEach((element) => {
    tbody.append(rowMaker(element));
  });
}