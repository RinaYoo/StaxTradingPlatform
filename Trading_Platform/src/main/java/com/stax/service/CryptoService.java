package com.stax.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.DocumentReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import com.stax.model.Crypto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class CryptoService {
    private static final String COLLECTION_NAME = "crypto";

    public Crypto getCryptoDetails(String name, String maxVolume, String cost) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        DocumentReference documentReference;
        documentReference=dbFirestore.collection(COLLECTION_NAME).document(name);
        documentReference=dbFirestore.collection(COLLECTION_NAME).document(maxVolume);
        documentReference=dbFirestore.collection(COLLECTION_NAME).document(cost);

        ApiFuture<DocumentSnapshot> future = documentReference.get();

        DocumentSnapshot document = future.get();

        Crypto crypto = null;
        if (document.exists()) {
            crypto = document.toObject(Crypto.class);
            return crypto;
        } else {
            return null;
        }
    }
}
