function handleSelect(event) {
    console.log(event.value);
    window.location.href = encodeURIComponent(event.value)
}