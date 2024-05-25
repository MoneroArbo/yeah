const linkComponent = (title, icon_classes, url) => {
  return `
    <div>
        <a href="${url}" target="_blank" class="links , hover">
        ${title}</a>
    </div>
  `
}