function toZohoExpiryDateTime(date) {
    const d = new Date(date);
    d.setHours(23, 59, 59, 0);
    return d.toISOString();
}

console.log(toZohoExpiryDateTime("2026-02-18T01:00:00"));
