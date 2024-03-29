import React from 'react'

export default async function wait(miliseconds) {
  return new Promixe(resolve => {
    setTimeout(() => {
        resolve();
    }, miliseconds )
  })
}
