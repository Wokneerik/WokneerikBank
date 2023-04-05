import { collection, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react"
import { db } from "../../../firebase"
import { IStory } from "./types"

export const useStories = () => {
    const [stories, setStories] = useState<IStory[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(
        () =>
            onSnapshot(
                query(collection(db, 'stories'),
                    orderBy('timestamp', 'asc')), snapshot => {
                        setStories(
                            snapshot.docs.map(d => {
                                  return  ({
                                        _id: d.id,
                                        ...d.data(),
                                    } as IStory)
                                }
                            )
                        )

                        setIsLoading(false)
                    }), [])

    return { stories, isLoading }
}