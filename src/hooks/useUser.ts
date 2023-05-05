interface UseUserStructure {
  createUser: (userData: FormData) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const apiUrl = process.env.REACT_APP_API_URL!;

  const createUser = async (userData: FormData) => {
    try {
      await fetch(`${apiUrl}/register`, {
        method: "POST",
        body: userData,
        headers: {
          "Content-type":
            "multipart/form-data; boundary=<calculated when request is sent>",
        },
      });
    } catch (error) {
      throw new Error((error as Error).message);
    }
  };

  return { createUser };
};

export default useUser;
