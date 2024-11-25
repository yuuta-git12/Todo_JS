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

    // liタグの子要素に各要素を追加
    div.appendChild(p);
    li.appendChild(div);

    // コンソールでの確認用
    console.log(li);

    // liタグの内容を未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
}

// id add-buttonの要素が押された時にonClickAddを実行する
document.getElementById("add-button").addEventListener("click",onClieckAdd);