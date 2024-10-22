// 获取 JSON 数据并处理
fetch('https://acoolg.github.io/comtonews/news.json')
  .then(response => response.json())
  .then(data => {
    // 检查数据是否是数组
    if (!Array.isArray(data)) {
      console.error('JSON 数据不是一个数组');
      return;
    }

    // 初始化一个空字符串来存储生成的 HTML
    let htmlString = '';

    // 遍历 JSON 数据数组
    data.forEach(jsonData => {
      // 为每个 JSON 对象生成相应的 HTML 字符串，并将其添加到 htmlString 中
      htmlString += `
          <a href="${jsonData.link}">
              <div class="card">
                  <h1>${jsonData.title}</h1>
                  <p>${jsonData.sub}</p>
              </div>
          </a>
      `;
    });

    // 然后，您可以将 htmlString 插入到您的文档中，例如：
    document.getElementById('news').innerHTML = htmlString;
  })
  .catch(error => {
    console.error('发生错误：', error);
  });

// 获取 JSON 数据并处理
fetch('https://acoolg.github.io/comtonews/list.json')
  .then(response => response.json())
  .then(jsonData => {
    // 初始化一个空字符串来存储生成的 HTML
    let htmlString = '';

    // 遍历 JSON 数据数组
    jsonData.forEach(item => {
      // 为每个 JSON 对象生成相应的 HTML 字符串，并将其添加到 htmlString 中
      htmlString += `
      <li>
        <a href="${item.link}" class="list-link" title="${item.title}">${item.text}</a>
      </li>
    `;
    });

    // 然后，您可以将 htmlString 插入到您的文档中，例如：
    document.getElementById('list').innerHTML = htmlString;
  })
  .catch(error => {
    console.error('发生错误：', error);
  });

  

