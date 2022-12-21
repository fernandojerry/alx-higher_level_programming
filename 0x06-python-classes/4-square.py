#!/usr/bin/python3
"4-square.py define"


class Square:
    """class Square
    """

    def __init__(self, size=0):
        """Inizialitation of variables
        """
        self.size = size

    def area(self):
        """Inizialitation of variables
        """
        return self.__size ** 2

    @property
    def size(self):
        """Inizialitation of variables
        """
        return self.__size

    @size.setter
    def size(self, value):
        """Inizialitation of variables
        """
        if not isinstance(value, int):
            raise TypeError("size must be an integer")
        elif value < 0:
            raise value("size must be >= 0")
        else:
            self.__size = value
