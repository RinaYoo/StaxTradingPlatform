package com.stax.controller;

import com.stax.model.Crypto;
import com.stax.service.CryptoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
public class CryptoController {

    @Autowired
    private CryptoService cryptoService;

    @GetMapping("/main")
    public Crypto getCrypto(@PathVariable String name, @PathVariable String maxVolume, @PathVariable String cost)
            throws ExecutionException, InterruptedException {
        return cryptoService.getCryptoDetails(name, maxVolume, cost);
    }
}
