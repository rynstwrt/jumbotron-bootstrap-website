function toggleCursor()
{
	const cursor = $('#cursor');
	const toSet = cursor.text() === '|' ? ' ' : '|';
	cursor.text(toSet);
}

setInterval(toggleCursor, 1000);
