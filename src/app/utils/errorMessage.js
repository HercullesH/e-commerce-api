class ErrorMessage {
	static validatorMessage(property) {
		return `a propriedade é '${property}' é inválido.`;
	}

	static notExists(property) {
		return `${property} não existe`;
	}
}

export default ErrorMessage;
