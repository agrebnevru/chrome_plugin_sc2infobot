// Временное хранение данных для radio buttom - Установка, что доп. отображать на иконке
function UpdateIndex(x)
{
localStorage.AddOnFavicon2 = x;
}

// Временное хранение данных для radio buttom - Установка, что делать при клике на ссылку online стрима
function UpdateIndex2(x)
{
localStorage.ClickOnStream2 = x;
}

// Временное хранение данных для radio buttom - Установка, что делать при клике на ссылку фан-стрима
function UpdateIndex3(x)
{
localStorage.ClickUsStream2 = x;
}

// Установка, что доп. отображать на иконке
function CheckBoxUpdate1(elementx1)
{
  if(elementx1.checked == true)
    { localStorage.ShowOnTitle12 = 2; } else { localStorage.ShowOnTitle12 = 1; }
}
function CheckBoxUpdate2(elementx2)
{
  if(elementx2.checked == true)
    { localStorage.ShowOnTitle22 = 2; } else { localStorage.ShowOnTitle22 = 1; }
}
function CheckBoxUpdate3(elementx3)
{
  if(elementx3.checked == true)
    { localStorage.ShowOnTitle32 = 2; } else { localStorage.ShowOnTitle32 = 1; }
}
function CheckBoxUpdate4(elementx4)
{
  if(elementx4.checked == true)
    { localStorage.ShowOnTitle42 = 2; } else { localStorage.ShowOnTitle42 = 1; }
}

// Сохранение данных
function SaveSettings()
{
localStorage.TimeUpdate = document.getElementById("TimeUpdateInt").value;
localStorage.AddOnFavicon = localStorage.AddOnFavicon2;
localStorage.ClickOnStream = localStorage.ClickOnStream2;
localStorage.ClickUsStream = localStorage.ClickUsStream2;
localStorage.ShowOnTitle1 = localStorage.ShowOnTitle12;
localStorage.ShowOnTitle2 = localStorage.ShowOnTitle22;
localStorage.ShowOnTitle3 = localStorage.ShowOnTitle32;
localStorage.ShowOnTitle4 = localStorage.ShowOnTitle42;
SetDataSettings();
alert("Сохранение выполнено! Настройки будут применены после очередного обновления плагина.");
window.close();
}

// Закрытие вкладки
function Close()
{
window.close();
}
