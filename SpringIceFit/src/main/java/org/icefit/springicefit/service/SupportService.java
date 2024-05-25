package org.icefit.springicefit.service;

import org.icefit.springicefit.api.model.SupportBody;
import org.icefit.springicefit.api.model.TrainingPlanBody;
import org.icefit.springicefit.dao.SupportDao;
import org.icefit.springicefit.model.Instructor;
import org.icefit.springicefit.model.Support;
import org.icefit.springicefit.model.TrainingPlan;
import org.springframework.stereotype.Service;


@Service
public class SupportService {

    private SupportDao supportDao;

    public SupportService(SupportDao supportDao) {
        this.supportDao = supportDao;
    }

    public Support createServiceBody(SupportBody supportBody) throws Exception {
        Support support = new Support();
        support.setName(supportBody.getName());
        support.setEmail(supportBody.getEmail());
        support.setMessage(supportBody.getMessage());

        return supportDao.save(support);
    }
}
