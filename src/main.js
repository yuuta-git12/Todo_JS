import './style.css';

const onClieckAdd = () => {
    // テキストボックスの値を取得し、テキストボックスを初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    
    // li生成
    const li = document.createElement("li");

    // div生成 class名list-rowを付与
    const div = document.createElement("div");
    div.className = "list-row";

    // p生成 class名todo-itemを付与 テストボックスの値を追加
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    // 完了ボタンのクリックイベント付与
    completeButton.addEventListener("click", () => {
        alert("完了");
    });

    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    // 削除ボタンのクリックイベント付与
    deleteButton.addEventListener("click", () => {
        //　押された削除ボタンの親にあるliタグを未完了リストから削除
        const deleteTarget = deleteButton.closest("li"); // 一番近い親のliタグを探す
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    });

    // liタグの子要素に各要素を追加
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    // liタグの内容を未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
}

// id add-buttonの要素が押された時にonClickAddを実行する
document.getElementById("add-button").addEventListener("click",onClieckAdd);