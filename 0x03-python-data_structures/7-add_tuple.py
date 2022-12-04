#!/usr/bin/python3
def add_tuple(tuple_a=(), tuple_b=()):
    if len(tuple_a) > len(tuple_b):
        tuple_b += (0,)
        if len(tuple_a) > len(tuple_b):
            tuple_b += (0,)
    result = [sum(i) for i in zip(tuple_a, tuple_b)]
    return tuple(result)
