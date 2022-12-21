#!/usr/bin/python3
"""A module that defines a square """


class Square:
    """ class square
    """
    def __init__(self, size=0):
       """ def __int__
       """
        if not isinstance(size, int):
            raise TypeError('size must be an integer')
        elif size < 0:
            raise ValueError('size must be >= 0')
        else:
            self.__size = size

    def area(self):
        """ def area
        """
        return (self.__size ** 2)
