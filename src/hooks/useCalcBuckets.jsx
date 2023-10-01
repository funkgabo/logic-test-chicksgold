import { useEffect, useState } from "react"

export const useCalcBuckets = (formData) => {
    const [error, setError] = useState('')
    const [solution, setSolution] = useState([])

    let newSolution = []

    //operation functions
    const transferFrombucketY = (newValue) => {
        newSolution.push({
            bucketX: newValue.bucketX + newValue.bucketY,
            bucketY: 0,
            explanation: 'Transfer bucket y to bucket x'
        })
        return {
            bucketX: newValue.bucketX + newValue.bucketY,
            bucketY: 0,
        }
    }
    const fillbucketY = (newValue) => {
        newSolution.push({
            bucketX: newValue.bucketX,
            bucketY: formData.bucketY,
            explanation: 'Fill bucket y'
        })
        return {
            bucketX: newValue.bucketX,
            bucketY: formData.bucketY
        }
    }

    const transferFrombucketX = (newValue) => {
        newSolution.push({
            bucketX: 0,
            bucketY: newValue.bucketY + newValue.bucketX,
            explanation: 'Transfer bucket x to bucket y'
        })

        return {
            bucketX: 0,
            bucketY: newValue.bucketY + newValue.bucketX,
        }
    }
    const fillbucketX = (newValue) => {
        newSolution.push({
            bucketX: formData.bucketX,
            bucketY: newValue.bucketY,
            explanation: 'Fill bucket x'
        })

        return {
            bucketX: formData.bucketX,
            bucketY: newValue.bucketY,
        }
    }

    const calcSolution = (formData, error) => {
        setSolution([])
        if (error) return

        let newValue = {
            bucketX: 0,
            bucketY: 0
        }

        //same value spected case
        if (formData.bucketX === formData.spectZ) {
            newValue = fillbucketX(newValue)
            setSolution(newSolution)
        } else if (formData.bucketY === formData.spectZ) {
            newValue = fillbucketY(newValue)
            setSolution(newSolution)
        } else {
            //normal case
            if (formData.bucketX > formData.bucketY) {
                while (formData.spectZ !== newValue.bucketX) {
                    newValue = fillbucketY(newValue)
                    newValue = transferFrombucketY(newValue)
                }
                setSolution(newSolution)
            }
            //inverse
            if (formData.bucketY > formData.bucketX) {
                while (formData.spectZ !== newValue.bucketY) {
                    newValue = fillbucketX(newValue)
                    newValue = transferFrombucketX(newValue)
                }
                setSolution(newSolution)
            }
        }

    }

    //inputs validations
    useEffect(() => {
        setError('')

        if ((Number(formData.spectZ) > Number(formData.bucketX) && Number(formData.spectZ) > Number(formData.bucketY)) ||
            (Number(formData.spectZ) < Number(formData.bucketX) && Number(formData.spectZ) < Number(formData.bucketY))
        ) {
            setError('No Solution Posible')
        }
        if ((Number(formData.bucketX) > Number(formData.bucketY)) && (Number(formData.spectZ) % Number(formData.bucketY) !== 0)) {
            setError('No Solution Posible')
        }
        if ((Number(formData.bucketY) > Number(formData.bucketX)) && (Number(formData.spectZ) % Number(formData.bucketX) !== 0)) {
            setError('No Solution Posible')
        }
        if (Number(formData.bucketX) === Number(formData.spectZ)) {
            setError('')
        }
        if (Number(formData.bucketY) === Number(formData.spectZ)) {
            setError('')
        }

        if(formData.spectZ === null){
            setError('No Solution Posible')
        }

    }, [formData])

    return { error, solution, calcSolution }

}