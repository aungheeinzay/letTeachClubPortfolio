export function getFieldError(field) {
  const value = field.value.trim();
  if (field.id === 'name' && value.length < 2) {
    return 'Error: enter a name with at least 2 characters.';
  }
  if (field.id === 'email' && (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || field.validity.typeMismatch)) {
    return 'Error: enter a valid email address.';
  }
  if (field.id === 'message' && (value.length < 20 || value.length > 500)) {
    return 'Error: use 20 to 500 characters, excluding outer spaces.';
  }
  return '';
}
